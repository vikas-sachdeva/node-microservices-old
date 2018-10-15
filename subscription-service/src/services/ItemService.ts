import * as model from "./../models/Item";

export class ItemService {

    public getAllItems(): model.Item[] {
        const itemList: model.Item[] = [

            new model.Item("id1", "item1"),
            new model.Item("id2", "item2"),
            new model.Item("id3", "item3"),
            new model.Item("id4", "item4"),
            new model.Item("id5", "item5"),
        ];
        return itemList;
    }

}
