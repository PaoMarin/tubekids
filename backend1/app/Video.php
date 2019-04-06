<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
	 protected $fillable = ['name', 'url_video','file_video'];
    
}
