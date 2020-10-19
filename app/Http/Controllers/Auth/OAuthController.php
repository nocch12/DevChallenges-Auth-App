<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class OAuthController extends Controller
{
   /**
    * OAuth認証先にリダイレクト
    *
    * @param str $provider
    * @return \Illuminate\Http\Response
    */
   public function redirectToProvider($provider)
   {
       return Socialite::driver($provider)->redirect();
   }

   /**
    * OAuth認証の結果受け取り
    *
    * @param str $provider
    * @return \Illuminate\Http\Response
    */
    public function handleProviderCallback($provider)
    {
        try {
            $providerUser = Socialite::with($provider)->user();

            $user = User::where('email', $providerUser->email)->first();
            logger()->debug(print_r($user, true));

            if(!$user) {
                $user = $this->createUser($providerUser);
            }
            Auth::login($user);

            $user->tokens()->where('name', 'token-name')->delete();
            $user->createToken('token-name')->plainTextToken;

        } catch(\Exception $e) {
            logger($e->getMessage());
        }

        return view('oauth_callback');
    }

    public function createUser($providerUser)
    {
        return User::create([
            'name'     => $providerUser->name || '',
            'email'    => $providerUser->email,
        ]);
    }
}
