export class LeftpaneHeader {
    public id: String
    public headerName: String
    public data: []
    public show: boolean

    constructor(id, headerName, data, show) {
        this.id = id
        this.headerName = headerName
        this.data = data
        this.show = show
    }
}