<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLevelPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_level_permissions', function (Blueprint $table) {
            $table->id();
            $table->string('userLevelId');

            //$table->string('accommodation'); //C = add/copy  D= delete  E = edit L = list  V = view S= search A = admin
            
            $table->string('employees')->nullable();
            $table->string('resource')->nullable();
            $table->string('resource_item')->nullable();
            $table->string('accommodation')->nullable();
            $table->string('rent_payment')->nullable();
            $table->string('bill_payment')->nullable();
            $table->string('client')->nullable();
            $table->string('invoice')->nullable();
            $table->string('purchase_order')->nullable();
            $table->string('vendor')->nullable();
            $table->string('user_level')->nullable();
            $table->string('user')->nullable();
            $table->string('dashboard')->default('default');
            //$table->string('employees');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_level_permissions');
    }
}
