// src/app/modules/auth/enums/permission.enum.ts
export var Permission;
(function (Permission) {
    // User management
    Permission["USER_CREATE"] = "USER_CREATE";
    Permission["USER_READ"] = "USER_READ";
    Permission["USER_UPDATE"] = "USER_UPDATE";
    Permission["USER_DELETE"] = "USER_DELETE";
    Permission["USER_SUSPEND"] = "USER_SUSPEND";
    Permission["USER_ACTIVATE"] = "USER_ACTIVATE";
    // Role management
    Permission["ROLE_CREATE"] = "ROLE_CREATE";
    Permission["ROLE_READ"] = "ROLE_READ";
    Permission["ROLE_UPDATE"] = "ROLE_UPDATE";
    Permission["ROLE_DELETE"] = "ROLE_DELETE";
    Permission["ROLE_ASSIGN"] = "ROLE_ASSIGN";
    // Permission management
    Permission["PERMISSION_READ"] = "PERMISSION_READ";
    Permission["PERMISSION_ASSIGN"] = "PERMISSION_ASSIGN";
    Permission["PERMISSION_REVOKE"] = "PERMISSION_REVOKE";
    // Dashboard
    Permission["DASHBOARD_VIEW"] = "DASHBOARD_VIEW";
    // System
    Permission["SYSTEM_SETTINGS"] = "SYSTEM_SETTINGS";
    Permission["AUDIT_LOG_VIEW"] = "AUDIT_LOG_VIEW";
})(Permission || (Permission = {}));
export const PermissionLabels = {
    [Permission.USER_CREATE]: 'Create Users',
    [Permission.USER_READ]: 'View Users',
    [Permission.USER_UPDATE]: 'Update Users',
    [Permission.USER_DELETE]: 'Delete Users',
    [Permission.USER_SUSPEND]: 'Suspend Users',
    [Permission.USER_ACTIVATE]: 'Activate Users',
    [Permission.ROLE_CREATE]: 'Create Roles',
    [Permission.ROLE_READ]: 'View Roles',
    [Permission.ROLE_UPDATE]: 'Update Roles',
    [Permission.ROLE_DELETE]: 'Delete Roles',
    [Permission.ROLE_ASSIGN]: 'Assign Roles',
    [Permission.PERMISSION_READ]: 'View Permissions',
    [Permission.PERMISSION_ASSIGN]: 'Assign Permissions',
    [Permission.PERMISSION_REVOKE]: 'Revoke Permissions',
    [Permission.DASHBOARD_VIEW]: 'View Dashboard',
    [Permission.SYSTEM_SETTINGS]: 'System Settings',
    [Permission.AUDIT_LOG_VIEW]: 'View Audit Logs'
};
//# sourceMappingURL=permission.enum.js.map