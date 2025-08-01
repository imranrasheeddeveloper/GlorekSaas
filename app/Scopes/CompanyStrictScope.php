<?php
  
namespace App\Scopes;
  
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

  
class CompanyStrictScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
		
		if(auth()->check() && !IsSuperAdmin(\JWTAuth::user()) )
		{ 
			$builder->where($model->getTable() .'.company_id', '=', auth()->user()->company_id);
		}
    }
}