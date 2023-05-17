import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ,ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
export function setFeaturesFlag(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeaturesFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}
