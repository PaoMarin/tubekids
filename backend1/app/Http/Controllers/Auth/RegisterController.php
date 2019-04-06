<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'last_name' => ['required', 'string', 'max:255'],
            'country' => ['string', 'max:255'],
            'birth_date' => ['required', 'date'],
            'phone_number' => ['required', 'integer'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $data['confirmation_code'] = str_random(25);
        
        $user = User::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'name' => $data['name'],
            'last_name' => $data['last_name'],
            'country' => $data['country'],
            'birth_date' => $data['birth_date'],
            'phone_number' => $data['phone_number'],
            'confirmation_code' => $data['confirmation_code'],
        ]);

        //Enviar el codigo de Confirmación
        Mail::send('emails.confirmation_code', $data,function($message) use ($data){
            $message->to($data['email'], $data['name'])->subject('Por favor confirma tu correo!');
        });
        return $user;
    }

    public function verify($code)
{
    $user = User::where('confirmation_code', $code)->first();

    if (! $user)
        return redirect('/');

    $user->confirmation_code = null;
    $user->save();

    return redirect('/home')->with('notification', 'Has confirmado correctamente tu correo!');
}
}
