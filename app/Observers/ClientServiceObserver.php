<?php

namespace App\Observers;

use App\Models\clientService;

class ClientServiceObserver
{
    /**
     * Handle the clientService "created" event.
     *
     * @param  \App\Models\clientService  $clientService
     * @return void
     */
    public function creating(clientService $clientService)
    {
        $clientService->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the clientService "updated" event.
     *
     * @param  \App\Models\clientService  $clientService
     * @return void
     */
    public function updated(clientService $clientService)
    {
        //
    }

    /**
     * Handle the clientService "deleted" event.
     *
     * @param  \App\Models\clientService  $clientService
     * @return void
     */
    public function deleted(clientService $clientService)
    {
        //
    }

    /**
     * Handle the clientService "restored" event.
     *
     * @param  \App\Models\clientService  $clientService
     * @return void
     */
    public function restored(clientService $clientService)
    {
        //
    }

    /**
     * Handle the clientService "force deleted" event.
     *
     * @param  \App\Models\clientService  $clientService
     * @return void
     */
    public function forceDeleted(clientService $clientService)
    {
        //
    }
}
