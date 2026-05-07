class CreateArticles < ActiveRecord::Migration[8.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :slug
      t.integer :status
      t.integer :palette
      t.references :author, null: false, foreign_key: true
      t.datetime :published_at
      t.date :public_date

      t.timestamps
    end
    add_index :articles, :slug
  end
end
