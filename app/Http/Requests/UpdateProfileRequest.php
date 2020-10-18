<?php

namespace App\Http\Requests;

use App\Rules\PhoneNumber;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'password' => ['filled', 'string', 'min:8'],
            'biography' => ['nullable', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255', new PhoneNumber],
            'photo' => ['nullable', 'sometimes', 'image', 'mimes:jpeg,bmp,png', 'max:1024'],
        ];
    }

    // バリデーション前処理
    protected function prepareForValidation()
    {
        $this->phoneFormat();
    }

    // 👇 電話番号加工
    protected function phoneFormat()
    {
        $phone = $this->phone ?: '';
        $search = array("-","ー");
        $phone = str_replace($search,"",$phone);
        $this->merge([
            'phone' => $phone
        ]);
    }
}
