<?php

namespace App\Observers;

use App\Models\audit;

class AuditObserver
{
    /**
     * Handle the audit "created" event.
     *
     * @param  \App\Models\audit  $audit
     * @return void
     */
    public function creating(audit $audit)
    {
        $audit->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the audit "updated" event.
     *
     * @param  \App\Models\audit  $audit
     * @return void
     */
    public function updated(audit $audit)
    {
        //
    }

    /**
     * Handle the audit "deleted" event.
     *
     * @param  \App\Models\audit  $audit
     * @return void
     */
    public function deleted(audit $audit)
    {
        //
    }

    /**
     * Handle the audit "restored" event.
     *
     * @param  \App\Models\audit  $audit
     * @return void
     */
    public function restored(audit $audit)
    {
        //
    }

    /**
     * Handle the audit "force deleted" event.
     *
     * @param  \App\Models\audit  $audit
     * @return void
     */
    public function forceDeleted(audit $audit)
    {
        //
    }
}
