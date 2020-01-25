<?php

namespace App\Repository\Eloquent;

use App\Repository\Contracts\ReservationRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReservationRepository implements ReservationRepositoryInterface
{
    public function bookApartmentUnits($data)
    {
        dd(Auth::id());
        foreach ($data as $id) {
            DB::table('reservations')->insert(['user_id' => Auth::id(), 'unit_id' => $id]);
        }
    }
}
