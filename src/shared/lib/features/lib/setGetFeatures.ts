import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ,ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
export function setFeaturesFlag(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeaturesFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeaturesFlags() {
    return featureFlags;
}
