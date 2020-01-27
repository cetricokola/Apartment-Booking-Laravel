<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Repository\Contracts\ReservationRepositoryInterface;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    protected $reservation;

    public function __construct(ReservationRepositoryInterface $reservation)
    {
        $this->reservation = $reservation;
    }

    public function bookUnit(Request $request)
    {
        $reservation = $this->reservation->bookApartmentUnits($request->units, 1);
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($reservation);
    }

    public function bookForClient(Request $request){
        $reservation = $this->reservation->bookApartmentUnits($request->units, $request->user);
        ProjectResource::withoutWrapping();
        return ProjectResource::collection($reservation);
    }
    public function fetchAllReservations(){
        $reservations = $this->reservation->fetchallReservations();
        return response()->json($reservations);
    }
    public function fetchSpecificClientReservations(){
        $reservations = $this->reservation->fetchReservations();
        return response()->json($reservations);
    }
    public function deleteReservation(Request $request){
        $reservations = $this->reservation->deleteReservation($request->id);
        return response()->json($reservations);
    }
}
