<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', 'AuthController@register');
Route::get('/register/verify/{code}', 'AuthController@verify');
Route::post('login', 'AuthController@login');

Route::group(['middleware' => 'jwt.auth'], function(){

});
Route::resource('videos', 'VideoController');
/*Route::get('videos', 'VideoController@index');
Route::get('videos/{video}', 'VideoController@show');
Route::post('videos', 'VideoController@store');
Route::put('videos/{video}', 'VideoController@update');
Route::delete('videos/{video}', 'VideoController@delete');*/

Route::get('profiles', 'ProfileController@index');
Route::get('profiles/{profile}', 'ProfileController@show');
Route::post('profiles', 'ProfileController@store');
Route::put('profiles/{profile}', 'ProfileController@update');
Route::delete('profiles/{profile}', 'ProfileController@delete');