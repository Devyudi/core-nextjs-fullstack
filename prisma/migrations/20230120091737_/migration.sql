-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `content_seo` (
    `content_id` INTEGER NOT NULL,
    `hash_id` VARCHAR(10) NULL,
    `seo_slug` VARCHAR(255) NOT NULL,
    `original_url` VARCHAR(255) NULL,
    `canonical_url` VARCHAR(255) NULL,
    `seo_keyword` VARCHAR(255) NULL,
    `seo_title` VARCHAR(255) NULL,
    `seo_summary` VARCHAR(255) NULL,
    `seo_img_alt` VARCHAR(255) NULL,
    `seo_content` VARCHAR(255) NULL,
    `seo_status` INTEGER NOT NULL DEFAULT 0,

    INDEX `content_id`(`content_id`),
    PRIMARY KEY (`content_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
