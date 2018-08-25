<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\User;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_user = Role::where('name', 'usuario')->first();
        $role_admin = Role::where('name', 'admin')->first();
        $role_syst = Role::where('name', 'sistema')->first();
        $user = new User();
        $user->name = 'Leo';
        $user->email = 'leoriccieri@gmail.com';
        $user->password = bcrypt('$0loforo');
        $user->save();
        $user->roles()->attach($role_syst);
        $user = new User();
        $user->name = 'Lerori';
        $user->email = 'lerori@autosoft.com.ar';
        $user->password = bcrypt('lerori');
        $user->save();
        $user->roles()->attach($role_admin);
        $user = new User();
        $user->name = 'Fulano';
        $user->email = 'fulano@gmail.com';
        $user->password = bcrypt('fulano');
        $user->save();
        $user->roles()->attach($role_user);
    }
}
