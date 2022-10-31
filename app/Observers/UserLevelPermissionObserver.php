<?php

namespace App\Observers;

use App\Models\userLevelPermission;

class UserLevelPermissionObserver
{
    /**
     * Handle the userLevelPermission "created" event.
     *
     * @param  \App\Models\userLevelPermission  $userLevelPermission
     * @return void
     */
    public function creating(userLevelPermission $userLevelPermission)
    {
        $userLevelPermission->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the userLevelPermission "updated" event.
     *
     * @param  \App\Models\userLevelPermission  $userLevelPermission
     * @return void
     */
    public function updated(userLevelPermission $userLevelPermission)
    {
        //
    }

    /**
     * Handle the userLevelPermission "deleted" event.
     *
     * @param  \App\Models\userLevelPermission  $userLevelPermission
     * @return void
     */
    public function deleted(userLevelPermission $userLevelPermission)
    {
        //
    }

    /**
     * Handle the userLevelPermission "restored" event.
     *
     * @param  \App\Models\userLevelPermission  $userLevelPermission
     * @return void
     */
    public function restored(userLevelPermission $userLevelPermission)
    {
        //
    }

    /**
     * Handle the userLevelPermission "force deleted" event.
     *
     * @param  \App\Models\userLevelPermission  $userLevelPermission
     * @return void
     */
    public function forceDeleted(userLevelPermission $userLevelPermission)
    {
        //
    }
}
