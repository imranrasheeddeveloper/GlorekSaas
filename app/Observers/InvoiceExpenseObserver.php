<?php

namespace App\Observers;

use App\Models\invoice_expense;

class InvoiceExpenseObserver
{
    /**
     * Handle the invoice_expense "created" event.
     *
     * @param  \App\Models\invoice_expense  $invoice_expense
     * @return void
     */
    public function creating(invoice_expense $invoice_expense)
    {
        $invoice_expense->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the invoice_expense "updated" event.
     *
     * @param  \App\Models\invoice_expense  $invoice_expense
     * @return void
     */
    public function updated(invoice_expense $invoice_expense)
    {
        //
    }

    /**
     * Handle the invoice_expense "deleted" event.
     *
     * @param  \App\Models\invoice_expense  $invoice_expense
     * @return void
     */
    public function deleted(invoice_expense $invoice_expense)
    {
        //
    }

    /**
     * Handle the invoice_expense "restored" event.
     *
     * @param  \App\Models\invoice_expense  $invoice_expense
     * @return void
     */
    public function restored(invoice_expense $invoice_expense)
    {
        //
    }

    /**
     * Handle the invoice_expense "force deleted" event.
     *
     * @param  \App\Models\invoice_expense  $invoice_expense
     * @return void
     */
    public function forceDeleted(invoice_expense $invoice_expense)
    {
        //
    }
}
