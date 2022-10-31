<?php

namespace App\Observers;

use App\Models\projectResource;

class ProjectResourceObserver
{
    /**
     * Handle the projectResource "created" event.
     *
     * @param  \App\Models\projectResource  $projectResource
     * @return void
     */
    public function creating(projectResource $projectResource)
    {
        $projectResource->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the projectResource "updated" event.
     *
     * @param  \App\Models\projectResource  $projectResource
     * @return void
     */
    public function updated(projectResource $projectResource)
    {
        //
    }

    /**
     * Handle the projectResource "deleted" event.
     *
     * @param  \App\Models\projectResource  $projectResource
     * @return void
     */
    public function deleted(projectResource $projectResource)
    {
        //
    }

    /**
     * Handle the projectResource "restored" event.
     *
     * @param  \App\Models\projectResource  $projectResource
     * @return void
     */
    public function restored(projectResource $projectResource)
    {
        //
    }

    /**
     * Handle the projectResource "force deleted" event.
     *
     * @param  \App\Models\projectResource  $projectResource
     * @return void
     */
    public function forceDeleted(projectResource $projectResource)
    {
        //
    }
}
