require "test_helper"

class LevelControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get level_index_url
    assert_response :success
  end
end
