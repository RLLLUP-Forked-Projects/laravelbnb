<?php

namespace App\Providers;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);//絵文字保存のために
        JsonResource::withoutWrapping();//data というキーの下にオブジェクトが入らないように。dataはLaravel のデフォルトの仕様
    }
}
