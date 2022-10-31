<?php

namespace App\Observers;

use App\Models\allocated_item;

class AllocatedItemObserver
{
    /**
     * Handle the allocated_item "created" event.
     *
     * @param  \App\Models\allocated_item  $allocated_item
     * @return void
     */
    public function creating(allocated_item $allocated_item)
    {
        $allocated_item->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the allocated_item "updated" event.
     *
     * @param  \App\Models\allocated_item  $allocated_item
     * @return void
     */
    public function updated(allocated_item $allocated_item)
    {
        //
    }

    /**
     * Handle the allocated_item "deleted" event.
     *
     * @param  \App\Models\allocated_item  $allocated_item
     * @return void
     */
    public function deleted(allocated_item $allocated_item)
    {
        //
    }

    /**
     * Handle the allocated_item "restored" event.
     *
     * @param  \App\Models\allocated_item  $allocated_item
     * @return void
     */
    public function restored(allocated_item $allocated_item)
    {
        //
    }

    /**
     * Handle the allocated_item "force deleted" event.
     *
     * @param  \App\Models\allocated_item  $allocated_item
     * @return void
     */
    public function forceDeleted(allocated_item $allocated_item)
    {
        //
    }
}
