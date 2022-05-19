// token key
// 存在内存中的token的Key
// 具体是哪一种内存要看/@/settings/projectSetting中的permissionCacheType
export const TOKEN_KEY = 'TOKEN__';

// user info key
// 存在内存中的用户信息Key
// 具体是哪一种内存要看/@/settings/projectSetting中的permissionCacheType
export const USER_INFO_KEY = 'USER__INFO__';

// lock info
// 存在LocalStorage内存中的锁屏信息
export const LOCK_INFO_KEY = 'LOCK__INFO__KEY__';

// base global local key
// 存在LocalStorage中缓存的Key
export const APP_LOCAL_CACHE_KEY = 'COMMON__LOCAL__KEY__';

// base global session key
// 存在SessionStorage中缓存的Key
export const APP_SESSION_CACHE_KEY = 'COMMON__SESSION__KEY__';

export enum CacheTypeEnum {
  SESSION,
  LOCAL,
}
