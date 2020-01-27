<?php


namespace App\Repository\Contracts;


interface ReservationRepositoryInterface
{
    public function bookApartmentUnits($data);
    public function fetchReservations();
    public function deleteReservation($id);
}
