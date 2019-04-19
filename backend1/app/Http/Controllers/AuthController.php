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


                 /*Enviar el codigo de Confirmación
                 Mail::send('emails.confirmation_code', ['email' =>  $user->email, 'name' => $user->name, 'confirmation_code' => $user->confirmation_code],function($message) use ($user){
                    $message->to($user['email'], $user['name'])->subject('Por favor confirma tu registro!');
                });*/
                 
                $email = new \SendGrid\Mail\Mail(); 
                $email->setFrom("tubekidsprogram@gmail.com", "Example User");
                $email->setSubject("Sending with SendGrid is Fun");
                $email->addTo($user->email, "Example User");
                $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
                $email->addContent(
                    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
                );
                $SENDGRID_API_KEY='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';
                $sendgrid = new \SendGrid($SENDGRID_API_KEY);
                $response = $sendgrid->send($email);
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
      $credentials = $request->only('email', 'password');
      if ( ! $token = JWTAuth::attempt($credentials)) {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
      }
      return response([
            'status' => 'success',
            'token' => $token
        ]);
    }

    public function logout()
    {
        JWTAuth::invalidate();
        return response([
                'status' => 'success',
                'msg' => 'Logged out Successfully.'
            ], 200);
    }
}
