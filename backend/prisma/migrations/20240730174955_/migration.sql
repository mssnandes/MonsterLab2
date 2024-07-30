-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `quantity` INTEGER NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `sabor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `cart_image_key`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
