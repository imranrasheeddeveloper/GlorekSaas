<?php

namespace App\Observers;

use App\Models\settings;

class SettingsObserver
{
    /**
     * Handle the settings "created" event.
     *
     * @param  \App\Models\settings  $settings
     * @return void
     */
    public function creating(settings $settings)
    {   
        if(!IsSuperAdmin(\JWTAuth::user()) )
		{
            $settings->company_id = auth()->user()->company_id;
		}
    }

    /**
     * Handle the settings "updated" event.
     *
     * @param  \App\Models\settings  $settings
     * @return void
     */
    public function updated(settings $settings)
    {
        //
    }

    /**
     * Handle the settings "deleted" event.
     *
     * @param  \App\Models\settings  $settings
     * @return void
     */
    public function deleted(settings $settings)
    {
        //
    }

    /**
     * Handle the settings "restored" event.
     *
     * @param  \App\Models\settings  $settings
     * @return void
     */
    public function restored(settings $settings)
    {
        //
    }

    /**
     * Handle the settings "force deleted" event.
     *
     * @param  \App\Models\settings  $settings
     * @return void
     */
    public function forceDeleted(settings $settings)
    {
        //
    }
}
