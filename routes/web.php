<?php

use App\Http\Controllers\Auth\OAuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/oauth/{provider}', [OAuthController::class, 'redirectToProvider']);
Route::get('/oauth/{provider}/callback', [OAuthController::class, 'handleProviderCallback']);

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
