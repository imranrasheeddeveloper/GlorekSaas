<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class userLevel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }

    public function permissions()
    {
        return $this->hasOne(userLevelPermission::class, 'userLevelId');
    }

    public function user()
    {
        return $this->hasMany(User::class, 'role')->orderBy('id','desc');
    }
}
