<?php

namespace App\Http\Controllers;

use App\Repository\Contracts\ManageProjectsReservationsRepositoryInterface;
use Illuminate\Http\Request;

class ManageProjectReservationsController extends Controller
{
    protected $project;

    public function __construct(ManageProjectsReservationsRepositoryInterface $project)
    {
        $this->project = $project;
    }

    public function deleteProject(Request $request)
    {
        $project = $this->project->deleteProject($request->id);
        return response()->json($project);
    }
}
