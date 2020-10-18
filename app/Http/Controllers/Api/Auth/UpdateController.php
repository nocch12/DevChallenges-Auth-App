<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UpdateController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfileRequest $request)
    {
        $user = $request->user();

        $updates = $request->only([
            'name', 'biography', 'phone'
        ]);

        if($request->password) {
            $updates['password'] = Hash::make($request->password);

        }
        if($this->updatePhoto($request)) {
            $updates['photo'] = $this->updatePhoto($request);
        }

        $user->update($updates);

        return response()->json($user);
    }

    private function updatePhoto(Request $request)
    {
        if(!$request->hasFile('photo')) return false;
        $ext = $request->file('photo')->getClientOriginalExtension();
        $name = "profile_photo.{$ext}";
        $path = "public/profile_photo/{$request->user()->id}";
        $request->photo->storeAs($path, $name);
        return $name;
    }
}
