import { inject, injectable } from 'tsyringe';
import { RoleDao } from '../auth/dao/role-dao.js';
import { UserDao } from '../auth/dao/user-dao.js';
import { AuthDao } from '../auth/dao/auth-dao.js';
import { User } from '../auth/entity/user.js';
import { Auth } from '../auth/entity/auth.js';
import bcrypt from 'bcrypt';

@injectable()
export class LoadData {
    constructor(
        @inject('RoleDao') private roleDao: RoleDao,
        @inject('UserDao') private userDao: UserDao,
        @inject('AuthDao') private authDao: AuthDao,
    ) {}

    public async loadData() {
        if (process.env.RELOAD_ENTITY == 'true') {
            this.roleDao.deleteAll();
            this.userDao.deleteAll();
            this.authDao.deleteAll();
            await this.loadRole();
            await this.loadUser();
            await this.loadAuth();
            await this.createAccount();
        }
    }

    private async loadRole() {
        console.info('loading role');
        this.roleDao.save({ name: 'ADMIN', description: 'Administrator can do everything in the system' });
        this.roleDao.save({ name: 'STAFF', description: 'Staff can do only staff feature' });
        this.roleDao.save({ name: 'MEMBER', description: 'MEMBER can do only memeber feature' });
        console.info('role loaded');
    }

    private async loadUser() {
        console.info('loading user');
        const admin: User = {
            firstname: 'Admin',
            lastname: 'Admin',
            birthday: new Date('1990-01-01'),
        };

        const user: User = {
            firstname: 'User',
            lastname: 'User',
            birthday: new Date('1990-02-02'),
        };

        const memeber: User = {
            firstname: 'Member',
            lastname: 'Member',
            birthday: new Date('1990-03-03'),
        };

        this.userDao.save(admin);
        this.userDao.save(user);
        this.userDao.save(memeber);
        console.info('user loaded');
    }

    private async loadAuth() {
        console.info('loading auth');
        const admin: Auth = {
            username: 'admin',
            password: bcrypt.hashSync('admin', 10),
            email: 'admin@admin.com',
            isVerifed: true,
            isEnabled: true,
        };

        const user: Auth = {
            username: 'user',
            password: bcrypt.hashSync('user', 10),
            email: 'user@user.com',
            isVerifed: true,
            isEnabled: true,
        };

        const member: Auth = {
            username: 'member',
            password: bcrypt.hashSync('member', 10),
            email: 'member@member.com',
            isVerifed: true,
            isEnabled: true,
        };

        this.authDao.save(admin);
        this.authDao.save(user);
        this.authDao.save(member);
        console.info('auth loaded');
    }

    private async createAccount() {
        console.info('creating account');
        const admin: Auth | null = await this.authDao.findByUsername('admin');
        const staff: Auth | null = await this.authDao.findByUsername('staff');
        const member: Auth | null = await this.authDao.findByUsername('member');

        const adminRole = await this.roleDao.findByName('ADMIN');
        const staffRole = await this.roleDao.findByName('STAFF');
        const memberRole = await this.roleDao.findByName('MEMBER');

        const user_admin = await this.userDao.findByFirstname('Admin');
        const user_staff = await this.userDao.findByFirstname('Staff');
        const user_member = await this.userDao.findByFirstname('Member');

        if (admin && adminRole && user_admin) {
            admin.roles = adminRole ? [adminRole] : [];
            admin.user = user_admin;
            this.authDao.save(admin);
        }

        if (staff && staffRole && user_staff) {
            staff.roles = staffRole ? [staffRole] : [];
            staff.user = user_staff;
            this.authDao.save(staff);
        }

        if (member && memberRole && user_member) {
            member.roles = memberRole ? [memberRole] : [];
            member.user = user_member;
            this.authDao.save(member);
        }
        console.info('account created');
    }
}
