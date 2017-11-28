<?php

/**
 * Theme settings options
 */
class ThemeOption_Init
{
    public function __construct()
    {
        $this->init_theme_settings();
    }
    public function init_theme_settings()
    {
        require_once __DIR__. '/general/ThemeOption.php';
    }
}
new ThemeOption_Init();
