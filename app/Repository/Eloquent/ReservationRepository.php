<?php

namespace App\Repository\Eloquent;

use App\Block;
use App\Floor;
use App\Project;
use App\Repository\Contracts\ReservationRepositoryInterface;
use App\Reservation;
use App\Unit;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ReservationRepository implements ReservationRepositoryInterface
{
    /**
     * @var bool
     */
    private $succeed;

    public function __construct()
    {
        $this->succeed = false;
    }

    public function bookApartmentUnits($data)
    {
        if (sizeof($data) == 0) {
            return response()->json(['error' => 'Booking not successfull. No unit selected'], 403);
        }
        try {
            $newReservation = array();
            foreach ($data as $id) {
                $reservation = new Reservation();
                $reservation->user_id = 1;
                $reservation->unit_id = $id;
                $reservation->save();
                Unit::where('id', $id)->update(['status' => 'unavailable']);
                $floor_id = DB::table('units')->where('id', '=', $id)->pluck('floor_id');
                $available_floor_count = Unit::where('status', 'available')->where('floor_id', '=', intval($floor_id[0]))->count();
                if ($available_floor_count == 0) {
                    Floor::where('id', intval($floor_id[0]))->update(['status' => 'unavailable']);
                }
                $block_id = DB::table('floors')->where('id', '=', intval($floor_id[0]))->pluck('block_id');
                $available_block_count = Floor::where('status', 'available')->where('block_id', '=', intval($block_id[0]))->count();
                if ($available_block_count == 0) {
                    Block::where('id', intval($block_id[0]))->update(['status' => 'unavailable']);
                }
                $project_id = DB::table('blocks')->where('id', '=', intval($block_id[0]))->pluck('project_id');
                $available_project_count = Block::where('status', 'available')->where('project_id', '=', intval($project_id[0]))->count();
                if ($available_project_count == 0) {
                    Project::where('id', intval($project_id[0]))->update(['status' => 'unavailable']);
                }
            }
            $this->succeed = true;
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error occurred in booking the apartment.'], 403);
        }
        if ($this->succeed == true) {
            foreach ($data as $id) {
                $reserv = DB::table('reservations')
                    ->join('units', 'units.id', '=', 'reservations.unit_id')
                    ->join('floors', 'units.floor_id', '=', 'floors.id')
                    ->join('blocks', 'floors.block_id', '=', 'blocks.id')
                    ->select('reservations.id', 'units.id as unit_id', 'units.number as unit_number', 'floors.number as floor_number', 'blocks.name as block')
                    ->where('reservations.unit_id', '=', $id)
                    ->get();
                array_push($newReservation, $reserv);
            }
            return $newReservation;
        }
    }

    public function getAvailableUnits()
    {
        return Unit::doesntHave('reservations')->get();
    }
}
