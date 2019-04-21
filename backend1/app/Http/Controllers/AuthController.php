<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterFormRequest;
use App\User;
use JWTAuth;
use Auth;
use DateTime;
use Mail;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt', ['except' => ['login']]);
    }
    public function register(Request $request)
    {
            $user = new User;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->name = $request->name;
            $user->last_name = $request->last_name;
            $user->country = $request->country;
            $user->birth_date = $request->birth_date;
            $user->phone_number = $request->phone_number;
            $user->confirmation_code = str_random(25);

            $f1 = new DateTime("{$user->birth_date}");
            $f2 = new DateTime("now");
        
            $diferencia =  $f1->diff($f2);
            if ($diferencia->format("%y") > 18) {
                $user->save();
                 
                $email1 = new \SendGrid\Mail\Mail(); 
                $email1->setFrom("tubekidsprogram@gmail.com", "Example User");
                $email1->setSubject("Confirma tu registro a Tubekids!");
                $email1->addTo($user->email, "Example User");
                $email1->addContent(
                    "text/html", "<h2>Hola {{ $user->name }}, gracias por registrarte en <strong>Tubekids</strong></h2>
                    <p>Por favor confirma tu correo electrónico en SendGrid</p>
                    <p>Para ello simplemente debes hacer click en el siguiente enlace:</p>"
                    /*"<a href= " {{ url('/register/verify/'. {$user->$confirmation_code})}}"> Clic para confirmar tu email</a>"*/
                );
                $SENDGRID_API_KEY='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';
                $sendgrid = new \SendGrid($SENDGRID_API_KEY);
                $response = $sendgrid->send($email1);
                try {
                    return 
                     response([
                        'status' => 'success',
                        'data' => $user
                    ], 200); 
                } catch (Exception $e) {
                    echo 'Caught exception: '. $e->getMessage() ."\n";
                }
                
       
            } else {
                return response([
                    'status' => 'error',
                    'error' => 'failed',
                    'msg' => 'You must be over 18 years old '
                ], 400);
            }
        } 
        
        public function verify($code)
        {
            $user = User::where('confirmation_code', $code)->first();
        
            if (! $user)
                return redirect('/');
        
            return redirect('/login')->with('notification', 'Has confirmado correctamente tu correo!');
        }

        public function login(Request $request)
        {
            $credentials = request(['email', 'password']);
        
            if (! $token = auth('api')->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            return $this->respondWithToken($token);
        }

        public function logout()
        {
            auth()->logout();
    
            return response()->json(['message' => 'Successfully logged out'],200);
        }

        protected function respondWithToken($token)
        {
            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth('api')->factory()->getTTL() * 60
            ]);
        }
        
}
