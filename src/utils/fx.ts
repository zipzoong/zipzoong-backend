export const isUnDeleted = <
    T extends { is_deleted: boolean; deleted_at: string | Date | null },
>(
    input: T,
): input is T & { is_deleted: false; deleted_at: null } => !input.is_deleted;

export const isDeleted = <
    T extends { is_deleted: boolean; deleted_at: string | Date | null },
>(
    input: T,
): input is T & { is_deleted: true; deleted_at: string | Date } =>
    !isUnDeleted(input);
