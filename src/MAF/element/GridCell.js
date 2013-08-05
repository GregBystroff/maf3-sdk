define('MAF.element.GridCell', function () {
	return new MAF.Class({
		ClassName: 'BaseGridCell',

		Extends: MAF.element.Container,

		initialize: function () {
			this.parent();

			if (this.config.content && this.config.content.element) {
				this.adopt(this.content = this.config.content);
				this.config.content = null;
				delete this.config.content;
			}
		},

		getCellDimensions: function () {
			return this.grid && this.grid.getCellDimensions();
		},

		getCellCoordinates: function () {
			return this.grid && this.grid.getCellCoordinates(this);
		},

		getCellIndex: function () {
			return this.grid && this.grid.getCellIndex(this);
		},

		getCellDataIndex: function () {
			return this.grid && this.grid.getCellDataIndex(this);
		},

		getCellDataItem: function () {
			return this.grid && this.grid.getCellDataItem(this);
		},

		suicide: function () {
			delete this.grid;
			Object.forEach(this, function (key, obj) {
				if (key !== 'owner' && typeOf(obj) === 'instance' && obj.suicide && obj !== this) {
					delete this[key];
					obj.suicide();
				}
			}, this);
			this.parent();
		}
	});
});
