<?php

namespace App\Http\Controllers;

use App\Repository\Contracts\ReservationRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    protected $reservation;

    public function __construct(ReservationRepositoryInterface $reservation)
    {
        $this->reservation = $reservation;
//        $this->middleware('auth:api');
    }

    public function bookUnit(Request $request)
    {
        $reservation = $this->reservation->bookApartmentUnits($request->units);
        return response()->json([$reservation]);
    }
}
