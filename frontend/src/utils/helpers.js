/**
 * General Frontend Utilities
 */

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });
}
