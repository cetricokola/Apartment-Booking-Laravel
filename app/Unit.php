<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $table = 'units';
    protected $fillable = ['floor_id', 'number'];
    public function floor(){
        return $this->belongsTo('App\Floor');
    }
}
