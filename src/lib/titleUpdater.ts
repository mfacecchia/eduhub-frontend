export default function updatePageTitle(title: string) {
    document.title = import.meta.env.VITE_PAGE_TITLE + ` - ${title}`;
}