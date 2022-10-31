<?php

namespace App\Observers;

use App\Models\userLevel;

class UserLevelObserver
{
    /**
     * Handle the userLevel "created" event.
     *
     * @param  \App\Models\userLevel  $userLevel
     * @return void
     */
    public function creating(userLevel $userLevel)
    {
        $userLevel->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the userLevel "updated" event.
     *
     * @param  \App\Models\userLevel  $userLevel
     * @return void
     */
    public function updated(userLevel $userLevel)
    {
        //
    }

    /**
     * Handle the userLevel "deleted" event.
     *
     * @param  \App\Models\userLevel  $userLevel
     * @return void
     */
    public function deleted(userLevel $userLevel)
    {
        //
    }

    /**
     * Handle the userLevel "restored" event.
     *
     * @param  \App\Models\userLevel  $userLevel
     * @return void
     */
    public function restored(userLevel $userLevel)
    {
        //
    }

    /**
     * Handle the userLevel "force deleted" event.
     *
     * @param  \App\Models\userLevel  $userLevel
     * @return void
     */
    public function forceDeleted(userLevel $userLevel)
    {
        //
    }
}
