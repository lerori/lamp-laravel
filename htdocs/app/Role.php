<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
	/**
    * relación many-to-many entre el User y el Role
    *
    * @return void
    */
    public function users()
	{
	    return $this
	        ->belongsToMany('App\User')
	        ->withTimestamps();
	}
}
