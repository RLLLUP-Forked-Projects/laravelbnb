<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookable extends Model
{
    public function bookings() {
        return $this->hasMany(Booking::class);
        // return $this->hasMany('App\Booking');
    }
    public function availableFor($from, $to): bool {
        return 0 == $this->bookings()->betweenDates($from, $to)->count();
    }
}
