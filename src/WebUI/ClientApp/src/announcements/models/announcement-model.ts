export class AnnouncementModel {
    constructor(
        public Id: number,
        public Title: string,
        public AnnouncementCategoryString: string,
        public AnnouncementCategory: AnnouncementCategory,
        public CreatedBy: string,
        public CreateDate: Date,
        public ModifiedDate: Date,
        public ModifiedBy: string,
        public IsActive: boolean,
        public IsDeleted: boolean
    ){}
}

export class AnnouncementCategory {
    Value: number;
    Text: string;
}