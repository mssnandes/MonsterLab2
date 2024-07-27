-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clothing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clothingClass` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `promotion` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suplements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `suplementClass` VARCHAR(191) NOT NULL,
    `nameProduct` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` TEXT NOT NULL,
    `promotion` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,
    `weight` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `suplements_nameProduct_key`(`nameProduct`),
    UNIQUE INDEX `suplements_image_key`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sabores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sabor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acessories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` TEXT NOT NULL,
    `promotion` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,

    UNIQUE INDEX `acessories_image_key`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
