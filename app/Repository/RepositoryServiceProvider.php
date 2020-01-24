<?php

namespace App\Repository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->registerProjectRepository();
        $this->registerBlockRepository();

    }

    public function registerProjectRepository()
    {
        return $this->app->bind('App\Repository\Contracts\ProjectRepositoryInterface', 'App\Repository\Eloquent\ProjectRepository');
    }

    public function registerBlockRepository()
    {
        return $this->app->bind('App\Repository\Contracts\BlockRepositoryInterface', 'App\Repository\Eloquent\BlockRepository');
    }
}
