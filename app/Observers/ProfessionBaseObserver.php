<?php

namespace App\Observers;

use App\Models\profession_base;

class ProfessionBaseObserver
{
    /**
     * Handle the profession_base "created" event.
     *
     * @param  \App\Models\profession_base  $profession_base
     * @return void
     */
    public function creating(profession_base $profession_base)
    {
        $profession_base->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the profession_base "updated" event.
     *
     * @param  \App\Models\profession_base  $profession_base
     * @return void
     */
    public function updated(profession_base $profession_base)
    {
        //
    }

    /**
     * Handle the profession_base "deleted" event.
     *
     * @param  \App\Models\profession_base  $profession_base
     * @return void
     */
    public function deleted(profession_base $profession_base)
    {
        //
    }

    /**
     * Handle the profession_base "restored" event.
     *
     * @param  \App\Models\profession_base  $profession_base
     * @return void
     */
    public function restored(profession_base $profession_base)
    {
        //
    }

    /**
     * Handle the profession_base "force deleted" event.
     *
     * @param  \App\Models\profession_base  $profession_base
     * @return void
     */
    public function forceDeleted(profession_base $profession_base)
    {
        //
    }
}
