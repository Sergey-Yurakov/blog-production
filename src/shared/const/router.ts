export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouterMain = () => '/';
export const getRouterAbout = () => '/about';
export const getRouterProfile = (id: string) => `/profile/${id}`;
export const getRouterArticles = () => '/articles';
export const getRouterArticleDetails = (id: string) => `/articles/${id}`;
export const getRouterArticleCreate = () => '/articles/new';
export const getRouterArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouterAdminPanel = () => '/admin';
export const getRouterForbidden = () => '/forbidden';
export const getRouterNotFound = () => '/*';
