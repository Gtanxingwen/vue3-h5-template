import type { ProjectConfig } from '/#/config';
import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';

const setting: ProjectConfig = {
  permissionCacheType: CacheTypeEnum.LOCAL,
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
};

export default setting;
