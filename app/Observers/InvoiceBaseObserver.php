<?php

namespace App\Observers;

use App\Models\invoice_base;

class InvoiceBaseObserver
{
    /**
     * Handle the invoice_base "created" event.
     *
     * @param  \App\Models\invoice_base  $invoice_base
     * @return void
     */
    public function creating(invoice_base $invoice_base)
    {
        $invoice_base->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the invoice_base "updated" event.
     *
     * @param  \App\Models\invoice_base  $invoice_base
     * @return void
     */
    public function updated(invoice_base $invoice_base)
    {
        //
    }

    /**
     * Handle the invoice_base "deleted" event.
     *
     * @param  \App\Models\invoice_base  $invoice_base
     * @return void
     */
    public function deleted(invoice_base $invoice_base)
    {
        //
    }

    /**
     * Handle the invoice_base "restored" event.
     *
     * @param  \App\Models\invoice_base  $invoice_base
     * @return void
     */
    public function restored(invoice_base $invoice_base)
    {
        //
    }

    /**
     * Handle the invoice_base "force deleted" event.
     *
     * @param  \App\Models\invoice_base  $invoice_base
     * @return void
     */
    public function forceDeleted(invoice_base $invoice_base)
    {
        //
    }
}
